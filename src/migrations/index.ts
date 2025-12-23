import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251223_162156_add_site_settings from './20251223_162156_add_site_settings';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251223_162156_add_site_settings.up,
    down: migration_20251223_162156_add_site_settings.down,
    name: '20251223_162156_add_site_settings'
  },
];
