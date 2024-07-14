
/*
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    try {
        jwt.verify(token, 'your-secret-key'); // JWT doğrulama
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
}

export const config = {
    matcher: ['/', '/about'],
};
*/