'use client'
import React, { Suspense, useEffect, useState } from 'react';
import CommissionDetailTemplate from '@/components/templates/commissionTemplate/CommissionDetailTemplate';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getProjectId, ProjectIdResponse } from '@/apis/project/getProjectId';

export default function CommissionIdPage() {
  const [commissionDetailProps, setCommissionDetailProps] = useState<ProjectIdResponse>({
    id: 0,
    title:'',
    summary:'',
    description:'[{"": ""}]',
    region:'',
    budget:0,
    deadline: '00-00-00T00:00:00',
    status: 'OPEN',
    clientName: '',
    clientProfileImageUrl:'',
    imageUrls:[],
  });
  const router = useRouter();
  const params = useParams();
  const getFetchCommissionDetailProps = async (id: number ) => {
    const response = await getProjectId({id});
    setCommissionDetailProps(response);
  }
  const onInquiryHandler = () => {
    router.push(`/expert/make-offer?projectId=${Number(params.commission_id)}`)
  }
  const onBeforeHandler = () => {
    router.push(`/commission`)
  }
  useEffect(() => {
    getFetchCommissionDetailProps(Number(params.commission_id));
  }, []);
  return (
    <Suspense>
      <CommissionDetailTemplate
        projectIdResponse={commissionDetailProps}
        onClickInquiry={onInquiryHandler}
        onClickBefore={onBeforeHandler}
      />
    </Suspense>
  );
}