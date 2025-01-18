/* eslint-disable no-var */
import {PrismaClient} from "@prisma/client";

// 声明全局变量，不然会有类型错误提示
declare global {
    var prisma: PrismaClient | undefined;
}

// globalThis 是关键字
function getPrismaClient(): PrismaClient {
    if (process.env.NODE_ENV === "production") {
        return new PrismaClient();
    }
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient();
    }
    return globalThis.prisma;
}

export const db = getPrismaClient()