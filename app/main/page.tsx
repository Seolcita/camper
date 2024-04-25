import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

const Main = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <p>
      Hello {data.user.email}
      <br />
      ID:{data.user.id}
      <hr />
    </p>
  );
};

export default Main;
