'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log('error🤬', error.message);
    redirect('/error');
  }

  console.log('signed out👋');

  revalidatePath('/', 'layout');
  redirect('/login');
}
