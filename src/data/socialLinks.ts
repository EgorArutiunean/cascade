export type SocialPlatform = 'telegram' | 'youtube' | 'instagram' | 'tiktok' | 'facebook';

export const SOCIAL_LINKS: Array<{ id: SocialPlatform; url: string; accent: string }> = [
  { id: 'telegram', url: 'https://t.me/Mama_Polska', accent: '#229ED9' },
  { id: 'youtube', url: 'https://example.com/youtube', accent: '#FF0000' },
  { id: 'instagram', url: 'https://example.com/instagram', accent: '#E1306C' },
  { id: 'tiktok', url: 'https://example.com/tiktok', accent: '#69C9D0' },
  { id: 'facebook', url: 'https://example.com/facebook', accent: '#1877F2' }
];
