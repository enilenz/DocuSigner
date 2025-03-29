'use client'
import {React, useRef, useEffect} from 'react'
import WebViewer from '@pdftron/webviewer';

const Webviewer = () => {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib/webviewer',
          licenseKey: 'demo:1743193528725:61255d0503000000009a2c2cd983b73f4b5652d395edebf46d1851f7c9', 
          initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        },
        viewer.current,
      ).then((instance) => {
          const { documentViewer } = instance.Core;
          const { Feature } = instance.UI;
          instance.UI.enableFeatures([Feature.FilePicker]);


        })
    })
  }, []);

  return (
    <div className='webviewer' ref={viewer}>

    </div>
    
  )
}

export default Webviewer