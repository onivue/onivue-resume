import { CoverZen } from '@/components/Templates/Zen/CoverZen';
import { ResumeZen } from '@/components/Templates/Zen/ResumeZen';

const TemplateChooser = ({ docTemplateName, docType, resumeSettings, formValues }) => {
  if (docType === 'resume') {
    if (docTemplateName === 'zen') return <ResumeZen resumeSettings={resumeSettings} formValues={formValues} />;
  }

  if (docType === 'cover') {
    if (docTemplateName === 'zen') return <CoverZen resumeSettings={resumeSettings} formValues={formValues} />;
  }

  return <></>;
};

export default TemplateChooser;
