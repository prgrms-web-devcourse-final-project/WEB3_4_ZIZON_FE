import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import TagList from '@/components/molecules/tagList/TagList';

interface ExpertInfoFormProps {
  initialData: {
    businessField: string;
    services: string[];
    experience: string;
    certifications: string[];
    shortIntro: string;
    fullIntro: string;
  };
}

export default function ExpertInfoForm({ initialData }: ExpertInfoFormProps) {
  const [businessField, setBusinessField] = useState(initialData.businessField);
  const [services, setServices] = useState(initialData.services);
  const [newService, setNewService] = useState('');
  const [experience, setExperience] = useState(initialData.experience);
  const [certifications, setCertifications] = useState(initialData.certifications);
  const [newCertification, setNewCertification] = useState('');
  const [shortIntro, setShortIntro] = useState(initialData.shortIntro);
  const [fullIntro, setFullIntro] = useState(initialData.fullIntro);
  const [isBusinessFieldEditable, setIsBusinessFieldEditable] = useState(false);
  const [isServicesEditable, setIsServicesEditable] = useState(false);
  const [isExperienceEditable, setIsExperienceEditable] = useState(false);
  const [isCertificationsEditable, setIsCertificationsEditable] = useState(false);
  const [isShortIntroEditable, setIsShortIntroEditable] = useState(false);
  const [isFullIntroEditable, setIsFullIntroEditable] = useState(false);

  const handleBusinessFieldEditClick = () => {
    setIsBusinessFieldEditable(!isBusinessFieldEditable);
  };

  const handleServicesEditClick = () => {
    setIsServicesEditable(!isServicesEditable);
    setNewService('');
  };

  const handleExperienceEditClick = () => {
    setIsExperienceEditable(!isExperienceEditable);
  };

  const handleCertificationsEditClick = () => {
    setIsCertificationsEditable(!isCertificationsEditable);
    setNewCertification('');
  };

  const handleShortIntroEditClick = () => {
    setIsShortIntroEditable(!isShortIntroEditable);
  };

  const handleFullIntroEditClick = () => {
    setIsFullIntroEditable(!isFullIntroEditable);
  };

  const handleAddService = () => {
    if (newService.trim()) {
      setServices([...services, newService.trim()]);
      setNewService('');
    }
  };

  const handleAddCertification = () => {
    if (newCertification.trim()) {
      setCertifications([...certifications, newCertification.trim()]);
      setNewCertification('');
    }
  };

  const handleRemoveService = (index: number) => {
    const newServices = services.filter((_, i) => i !== index);
    setServices(newServices);
  };

  const handleRemoveCertification = (index: number) => {
    const newCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(newCertifications);
  };

  return (
    <div className="flex flex-col gap-32">
      <EditableField
        id="businessField"
        label="비즈니스 분야"
        value={businessField}
        placeholder="청소"
        onChange={setBusinessField}
        isEditable={isBusinessFieldEditable}
        onEditClick={handleBusinessFieldEditClick}
      />

      <TagList
        label="제공 서비스"
        tags={services}
        isEditable={isServicesEditable}
        newTagValue={newService}
        placeholder="제공하는 서비스를 입력하세요"
        onEditClick={handleServicesEditClick}
        onAddTag={handleAddService}
        onRemoveTag={handleRemoveService}
        onNewTagChange={setNewService}
      />

      <EditableField
        id="experience"
        label="경력"
        value={experience}
        placeholder="6년"
        onChange={setExperience}
        isEditable={isExperienceEditable}
        onEditClick={handleExperienceEditClick}
      />

      <TagList
        label="자격증"
        tags={certifications}
        isEditable={isCertificationsEditable}
        newTagValue={newCertification}
        placeholder="보유한 자격증을 입력하세요"
        onEditClick={handleCertificationsEditClick}
        onAddTag={handleAddCertification}
        onRemoveTag={handleRemoveCertification}
        onNewTagChange={setNewCertification}
      />

      <EditableField
        id="shortIntro"
        label="환풍 소개"
        value={shortIntro}
        placeholder="6년 경력의 청소 전문가, 완벽한 클린 환경을 만들어 드립니다."
        onChange={setShortIntro}
        isEditable={isShortIntroEditable}
        onEditClick={handleShortIntroEditClick}
      />

      <EditableField
        id="fullIntro"
        label="전문가 소개"
        value={fullIntro}
        placeholder="안녕하세요, 청소 전문가 이진우입니다..."
        onChange={setFullIntro}
        isEditable={isFullIntroEditable}
        onEditClick={handleFullIntroEditClick}
      />
    </div>
  );
}
