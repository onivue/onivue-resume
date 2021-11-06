import React, { useEffect, useRef, useState } from 'react'
import QRCodeStyling from 'qr-code-styling'

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  dotsOptions: {
    color: 'black',
    type: 'rounded',
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 20,
  },
})

export default function App() {
  const [url, setUrl] = useState('https://qr-code-styling.com')
  const [fileExt, setFileExt] = useState('png')
  const ref = useRef(null)

  useEffect(() => {
    qrCode.append(ref.current)
  }, [])

  useEffect(() => {
    qrCode.update({
      data: url,
    })
    console.log(qrCode._canvas.getCanvas().toDataURL('image/png', 90))
  }, [url])

  const onUrlChange = (event) => {
    event.preventDefault()
    setUrl(event.target.value)
  }

  const onExtensionChange = (event) => {
    setFileExt(event.target.value)
  }

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    })
  }

  return (
    <div className="App">
      <div style={styles.inputWrapper}>
        <input value={url} onChange={onUrlChange} style={styles.inputBox} />
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div ref={ref} />
    </div>
  )
}

const styles = {
  inputWrapper: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
}
