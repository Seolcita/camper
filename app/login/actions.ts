'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function loginWithEmailAndPassword(formData: FormData) {
  const supabase = createClient();

  //TODO: Add validation user's inputs
  const loginInfo = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { data, error } = await supabase.auth.signInWithPassword(loginInfo);

  if (error) {
    console.log('error🤬', error.message);
    redirect('/error');
  }

  console.log('data👤', data);

  revalidatePath('/', 'layout');
  redirect('/main');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const signupInfo = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { data, error } = await supabase.auth.signUp(signupInfo);

  console.log('data👤', data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/main');
}
