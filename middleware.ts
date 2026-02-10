import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname;

    if (url.startsWith('/admin-1001')) {
        return NextResponse.next();
    }

    if (url.startsWith('/admin')) {
        return NextResponse.rewrite(new URL('/404', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/admin-1001/:path*'],
};
