import os
import tempfile
from PIL import Image

IMAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'images')

def compress_png_safe(filepath):
    img = Image.open(filepath)
    size_before = os.path.getsize(filepath)
    # Save to temp file first to compare
    tmp = tempfile.NamedTemporaryFile(suffix='.png', delete=False)
    tmp_path = tmp.name
    tmp.close()
    try:
        img.save(tmp_path, 'PNG', optimize=True)
        size_after = os.path.getsize(tmp_path)
        if size_after < size_before:
            os.replace(tmp_path, filepath)
            return size_before, size_after
        else:
            os.unlink(tmp_path)
            return size_before, size_before
    except:
        if os.path.exists(tmp_path):
            os.unlink(tmp_path)
        return size_before, size_before

def compress_jpg_safe(filepath, quality=85):
    img = Image.open(filepath)
    size_before = os.path.getsize(filepath)
    # Save to temp file first
    tmp = tempfile.NamedTemporaryFile(suffix='.jpg', delete=False)
    tmp_path = tmp.name
    tmp.close()
    try:
        img.save(tmp_path, 'JPEG', quality=quality, optimize=True, progressive=True)
        size_after = os.path.getsize(tmp_path)
        if size_after < size_before:
            os.replace(tmp_path, filepath)
            return size_before, size_after
        else:
            os.unlink(tmp_path)
            return size_before, size_before
    except:
        if os.path.exists(tmp_path):
            os.unlink(tmp_path)
        return size_before, size_before

def main():
    total_before = 0
    total_after = 0
    results = []

    for fname in sorted(os.listdir(IMAGES_DIR)):
        fpath = os.path.join(IMAGES_DIR, fname)
        if not os.path.isfile(fpath):
            continue

        ext = fname.lower().rsplit('.', 1)[-1]
        try:
            if ext in ('png',):
                b, a = compress_png_safe(fpath)
            elif ext in ('jpg', 'jpeg'):
                b, a = compress_jpg_safe(fpath, quality=85)
            else:
                continue
            saved = b - a
            if saved > 0:
                pct = (saved / b) * 100
                results.append((fname, b, a, saved, pct))
            total_before += b
            total_after += a
        except Exception as e:
            print(f"  SKIP {fname}: {e}")

    print(f"\n{'='*68}")
    print(f"{'File':<38} {'Before':>8} {'After':>8} {'Saved':>8} {'%':>6}")
    print(f"{'='*68}")
    for fname, b, a, saved, pct in sorted(results, key=lambda x: -x[3]):
        print(f"{fname:<38} {b//1024:>6}KB {a//1024:>6}KB {saved//1024:>6}KB {pct:>5.1f}%")
    print(f"{'='*68}")
    total_saved = total_before - total_after
    pct_total = (total_saved / total_before) * 100 if total_before > 0 else 0
    print(f"{'TOTAL':<38} {total_before//1024:>6}KB {total_after//1024:>6}KB {total_saved//1024:>6}KB {pct_total:>5.1f}%")
    print(f"{'='*68}")
    print(f"\nFiles unchanged (already optimal or too small): {len(results) - len([r for r in results if r[3] > 0])}")

if __name__ == '__main__':
    main()
