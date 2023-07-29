import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { decode } from 'next-auth/jwt';

const SESSION_TOKEN = 'next-auth.session-token';
const NEXTAUTH_SECRET = process?.env.NEXTAUTH_SECRET;

export const GET = async () => {
  let decodedToken;
  const store = cookies();
  const sessionToken = store.get(SESSION_TOKEN);

  if (sessionToken && NEXTAUTH_SECRET) {
    decodedToken = await decode({
      token: sessionToken.value,
      secret: NEXTAUTH_SECRET,
    });
  }

  const isAuthenticated = !!decodedToken;

  const obj = {
    staus: isAuthenticated ? 100 : 401,
    authenticated: isAuthenticated,
    ...decodedToken,
  };

  return NextResponse.json({
    obj,
  });
};
