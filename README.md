# Blog Management

## Authentication & Authorization:
- **Login/Logout**: Người dùng có thể đăng nhập và đăng xuất.
- **Role-Based Access Control**: Phân quyền cho người dùng (ví dụ: admin, editor, viewer).

## Search Functionality:
- **Search Blogs**: Tìm kiếm bài viết theo tiêu đề, nội dung hoặc tác giả.
- **Search Users**: Tìm kiếm người dùng theo tên hoặc email.

## Notifications:
- **Email Notifications**: Gửi email thông báo khi có bài viết mới hoặc bình luận mới.
- **In-App Notifications**: Hiển thị thông báo trong ứng dụng khi có hoạt động mới.

## Analytics Dashboard:
- **User Activity**: Thống kê hoạt động của người dùng (số bài viết, số bình luận).
- **Blog Performance**: Thống kê hiệu suất của bài viết (lượt xem, lượt bình luận).

## Database Design in MockAPI

### Users Object
- **id**: Unique identifier for the user (string) use lib uuid
- **username**: Username of the user (string)
- **email**: Email address of the user (string)
- **password**: Password for the user account (string)
- **role**: Role of the user (e.g., admin, editor, viewer) (string)
- **userCreatedAt**: Timestamp when the user was created (string)
- **userUpdatedAt**: Timestamp when the user was last updated (string)
- Link MockAPI: https://66f187c4415379191551492f.mockapi.io/users
### Blogs Object
- **id**: Unique identifier for the blog (string) use lib uuid
- **title**: Title of the blog (string)
- **content**: Content of the blog (string)
- **userId**: ID of the user who created the blog (string) - Foreign key - The same as the "id" in the Users object
- **blogCreatedAt**: Timestamp when the blog was created (string)
- **blogUpdatedAt**: Timestamp when the blog was last updated (string)
- Link MockAPI: https://66f187c4415379191551492f.mockapi.io/blogs

src/
  components/
    BlogList.tsx
    BlogPost.tsx
    SearchBar.tsx
    NotificationList.tsx
  pages/
    Home.tsx
    Login.tsx
    Register.tsx
    Dashboard.tsx
  layout/
    Header.tsx
    Footer.tsx
    MainLayout.tsx
  models/
    Blogs.ts
    Users.ts
  services/
    api.ts
    auth.ts
  context/
    AuthContext.tsx
  App.tsx
  main.tsx
