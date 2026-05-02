import Image from 'next/image';
import styles from './DevicesSection.module.css';

const devices = [
  { 
    id: 'smart-tv', 
    name: 'Smart TV', 
    color: '#00d4ff',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    )
  },
  { 
    id: 'android-box', 
    name: 'Android Box', 
    color: '#00E676',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 10H7C5.89543 10 5 10.8954 5 12V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V12C19 10.8954 18.1046 10 17 10Z"></path>
        <path d="M7 10V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10"></path>
        <line x1="9" y1="7" x2="9.01" y2="7"></line>
        <line x1="15" y1="7" x2="15.01" y2="7"></line>
      </svg>
    )
  },
  { 
    id: 'firestick', 
    name: 'Amazon Firestick', 
    color: '#FF9800',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 00-1 3"></path>
      </svg>
    )
  },
  { 
    id: 'apple-tv', 
    name: 'Apple TV', 
    color: '#A2AAAD',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
        <path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path>
      </svg>
    )
  },
  { 
    id: 'smartphones', 
    name: 'Smartphones', 
    color: '#B388FF',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  { 
    id: 'windows-mac', 
    name: 'Windows / Mac', 
    color: '#00B0FF',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="2" y1="20" x2="22" y2="20"></line>
      </svg>
    )
  },
];

export function DevicesSection() {
  return (
    <section className={styles.devicesSection}>
      <div className={styles.backgroundTransition} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Nexus 4K IPTV Compatible Devices
          </h2>
          <p className={styles.description}>
            Whether you're at home on the big screen or traveling with your smartphone,
            your subscription goes with you. Connect up to 3 devices simultaneously with
            our premium plans.
          </p>
        </div>
        
        {/* SEO Required Image */}
        <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
          <Image 
            src="/images/og-default.jpg" 
            alt="Nexus IPTV compatible with Smart TV, Android, iOS and MAG devices" 
            width={1200} 
            height={630} 
          />
        </div>

        <div className={styles.grid}>
          {devices.map((device) => (
            <div 
              key={device.id} 
              className={styles.deviceCard}
              style={{ '--device-color': device.color } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                {device.icon}
              </div>
              <span className={styles.deviceName}>{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
