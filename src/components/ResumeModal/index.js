import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeModal() {
  return (
    <div id='resume-modal' className='uk-flex-top' uk-modal='true'>
      <div className='uk-modal-dialog uk-modal-body uk-margin-auto-vertical'>
        <button
          className='uk-modal-close-default'
          type='button'
          uk-close='true'
        ></button>
        <Document file={resume} onContextMenu={(e) => e.preventDefault()}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default ResumeModal;
