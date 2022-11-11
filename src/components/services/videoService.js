import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_URL,
  process.env.NEXT_PUBLIC_KEY,
);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('Videos').select('*');
    },
  };
}
