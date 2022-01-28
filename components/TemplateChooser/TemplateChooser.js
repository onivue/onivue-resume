import useResumeStore from '@/stores/useResumeStore'
import { ResumeZen } from '@/components/Templates/Zen/ResumeZen'
import { CoverZen } from '@/components/Templates/Zen/CoverZen'

const TemplateChooser = () => {
  const docTemplateName = useResumeStore((state) => state.docTemplateName)
  const docType = useResumeStore((state) => state.docType)

  if (docType === 'resume') {
    if (docTemplateName === 'zen') return <ResumeZen />
  }

  if (docType === 'cover') {
    if (docTemplateName === 'zen') return <CoverZen />
  }

  return <></>
}

export default TemplateChooser
