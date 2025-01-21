This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# shadcn

npx shadcn@latest init 安装shadcn 客户端工具

npx shadcn@latest add sidebar 安装侧边栏组件

# prisma 常用命令

## npm install prisma @prisma/client

安装

## npx prisma --help    or   prisma --help

查看帮助

## prisma init

生成 prisma/schema.prisma 文件

## npx prisma db pull

若数据库里面已经有表结构，则这行该命令将表结构schema取到本地的 `/prisma/schema.prisma`目录

## prisma generate

生成客户端代码（类似mybatis生成mapper接口）

## prisma db push

将修改的表结构推送到数据库

## prisma studio

本地启动的数据库控制面