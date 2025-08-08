# Road Map

一个基于 React + TypeScript + Vite 的路由地图应用。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start
```

## 构建

```bash
# 构建生产版本
npm run build
```

## GitHub Pages 部署

本项目配置了自动部署到 GitHub Pages 的 GitHub Actions 工作流。

### 重要说明

- 项目已配置为在 GitHub Pages 环境下正确加载静态资源
- `routes.json` 文件已放置在 `public` 目录中，确保构建时被正确复制
- 应用会自动检测部署环境并调整资源路径

### 设置步骤：

1. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 `Settings` → `Pages`
   - 在 `Source` 部分选择 `GitHub Actions`

2. **配置仓库权限**
   - 进入 `Settings` → `Actions` → `General`
   - 在 `Workflow permissions` 部分选择 `Read and write permissions`
   - 保存设置

3. **推送代码**
   - 将代码推送到 `main` 或 `master` 分支
   - GitHub Actions 会自动构建并部署到 GitHub Pages

### 访问地址

部署完成后，你的应用将在以下地址可用：
```
https://[你的用户名].github.io/road-map/
```

## 技术栈

- React 18
- TypeScript
- Vite
- GitHub Actions (自动部署)

## 项目结构

```
├── components/          # React 组件
├── .github/workflows/   # GitHub Actions 配置
├── index.html          # HTML 入口文件
├── index.tsx           # React 入口文件
├── RoadMap.tsx         # 主应用组件
├── types.ts            # TypeScript 类型定义
├── routes.json         # 路由数据
├── vite.config.ts      # Vite 配置
└── package.json        # 项目依赖
``` 