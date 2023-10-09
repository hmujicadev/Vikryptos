const DashboardHome = () => {
  return (
    <div
      style={{ height: '600px', width: '500px' }}
      className="sketchfab-embed-wrapper"
    >
      {' '}
      <iframe
        title="Berserkerfix"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/6f83baf8f58a43758f2495de5feaee60/embed"
      ></iframe>
      <p
        style={{
          fontSize: '13px',
          fontWeight: 'normal',
          margin: '5px',
          color: '#4A4A4A',
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/berserkerfix-6f83baf8f58a43758f2495de5feaee60?utm_medium=embed&utm_campaign=share-popup&utm_content=6f83baf8f58a43758f2495de5feaee60"
          target="_self"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          {' '}
          Berserkerfix{' '}
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/iiigoodnightiii?utm_medium=embed&utm_campaign=share-popup&utm_content=6f83baf8f58a43758f2495de5feaee60"
          target="_self"
          style={{ fontWeight: 'bold', color: ' #1CAAD9' }}
        ></a>{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6f83baf8f58a43758f2495de5feaee60"
          target="_self"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  )
}

export default DashboardHome
