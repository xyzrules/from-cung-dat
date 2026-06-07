# Apology microsite

## File overview

- `index.html`: cấu trúc 3 màn hình
- `styles.css`: giao diện màu hồng và hiệu ứng tim
- `logic.mjs`: logic bấm nút Yes / No
- `script.js`: điều khiển chuyển màn hình và chạy hiệu ứng

## Xem thử trên máy

1. Mở thư mục `F:\Other\WebTest`.
2. Nhấp đúp `index.html`, hoặc chạy lệnh sau trong PowerShell:

```powershell
Start-Process (Resolve-Path .\index.html)
```

3. Kiểm tra lại các bước trong `tests\manual-checklist.md`.

## Đăng lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file `index.html`, `styles.css`, `logic.mjs`, `script.js`, `README.md`, và thư mục `tests` nếu bạn muốn giữ checklist.
3. Vào Settings > Pages.
4. Chọn Deploy from a branch, rồi chọn branch `main` và thư mục `/ (root)`.
5. Mở đường link đã publish sau khi bấm `Save` và chờ GitHub Pages hoàn tất publish.

## Cập nhật nội dung sau này

- Đổi chữ trực tiếp trong `index.html`
- Đổi màu hoặc khoảng cách trong `styles.css`
- Đổi logic nút trong `logic.mjs` hoặc `script.js`
- Nếu có ảnh thật, thay emoji trong `index.html` bằng thẻ `<img>`
