import {db} from "@/lib/db";

export async function GET() {

    const user = await db.user.findFirst()
    return Response.json({user});
}

export async function POST() {
    await  db.user.create({
        data: {
            id:"1",
            updatedAt: new Date(),
            name: "张三",
            email: "991232@163,com",
            password: "我说加密之后的密码",
        },
    })
    return Response.json({message: "Database seeded successfully"});
}