'use server';
import { PrismaClient } from '@prisma/client';
import { prismaToJSObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constatnts';

//Get latest product
export const getLatestProducts = async () => {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return prismaToJSObject(products);
}