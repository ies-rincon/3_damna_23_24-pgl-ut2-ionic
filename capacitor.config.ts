import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'hello.world.ionic',
  appName: 'hello-world-ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
