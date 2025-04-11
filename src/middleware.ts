import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decodeToken } from './utils/decodeToken';
import { cookies } from 'next/headers';

// 라우터의 모든 경로에 middleware를 적용
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images|icons|logo).*)'],
};

const protectedRoutes = [
  //'/commission',
  '/commission/common',
  '/commission/cleaning',
  '/commission/hobby',
  '/commission/lesson',
  '/commission/move',
  '/commission/settingFix',
  '/payments',
  '/client',
  '/store/products/register',
  '/mypage',
  '/expert/register',
  '/expert/chat',
  '/expert/make-offer',
]; // 로그인 정보가 있어야 접근 가능한 페이지
const publicRoutes = ['/login', '/signup']; // 로그인시 접근 불가능한 페이지
const expertOnlyRoutes = ['/store/products/register', '/expert/chat', '/expert/make-offer'];
const clientOnlyRoutes = ['/expert/register', '/client/chat'];

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value; // 쿠키에서 accessToken 가져오기
  // const cookieStore = await cookies();
  // const token = request.cookies.get('accessToken')
  // cookieStore.get('accessToken')?.value; // 쿠키에서 accessToken 가져오기
  console.log("request.cookies", request.cookies);
  console.log('All cookies:', request.cookies.getAll());
  const currentPathname = request.nextUrl.pathname;


  // 현재 경로가 protectedRoutes의 하위경로인지 확인
  const underProtectedRoutes = protectedRoutes.some(route => currentPathname.startsWith(route));
  const underExpertOnlyRoutes = expertOnlyRoutes.some(route => currentPathname.startsWith(route));
  const underClientOnlyRoutes = clientOnlyRoutes.some(route => currentPathname.startsWith(route));

  // 토큰이 없다면 : 로그인 안한 상태에서 접근 시도 -> 로그인 창으로 이동
  if (!token && underProtectedRoutes) {
    const url = request.nextUrl.clone(); // 요청 url 복사
    url.pathname = '/login';

    return NextResponse.redirect(url);
  }

  // 로그인 상태
  if (token) {
    const decodedToken = decodeToken(token);
    const role = decodedToken?.role; // CLIENT, EXPERT

    //재 로그인 접근 시도 -> 메인 페이지로 이동
    if (publicRoutes.includes(currentPathname)) {
      const url = request.nextUrl.clone();
      url.pathname = '/';

      return NextResponse.redirect(url);
    } else if (role === 'EXPERT' && underClientOnlyRoutes) {
      // 전문가 상태에서 의뢰인 페이지 접근시도
      const url = request.nextUrl.clone();
      url.pathname = '/myPage/myProject';

      return NextResponse.redirect(url);
    } else if (role === 'CLIENT' && underExpertOnlyRoutes) {
      // 의뢰인 상태에서 전문가 페이지 접근시도
      const url = request.nextUrl.clone();
      url.pathname = '/myPage/myProject';

      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
