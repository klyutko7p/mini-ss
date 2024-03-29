import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequestBody {
    idArray: number[];
    flag: string;
}


export default defineEventHandler(async (event) => {
    try {
        const { idArray, flag } = await readBody<IRequestBody>(event);

        if (flag === 'OurRansom') {
            const deleteRows = await prisma.ourRansom.updateMany({
                where: {
                    issued: {
                        not: null,
                    }
                },
                data: {
                    deleted: new Date(),
                }
            })
        } else if (flag === 'ClientRansom') {
            const deleteRows = await prisma.clientRansom.updateMany({
                where: {
                    issued: {
                        not: null,
                    }
                },
                data: {
                    deleted: new Date(),
                }
            })
        } else if (flag === 'Delivery') {
            const deleteRows = await prisma.delivery.updateMany({
                where: {
                    paid: {
                        not: null,
                    }
                },
                data: {
                    deleted: new Date(),
                }
            })
        }


    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            return { error: error.message };
        }
    }

});
