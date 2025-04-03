'use client';

import ExpertStepFooterButton from '@/components/atoms/buttons/expertStepFooterButton/ExpertStepFooterButton';
import ExpertMajorCategory from '@/components/organisms/expertRegister/expertMajorCategory/ExpertMajorCategory';

function ExpertMajorCategoryTemplete() {
  return (
    <section className="w-full flex justify-center mt-72">
      <div className="flex flex-col items-end gap-32">
        <ExpertMajorCategory />
        <ExpertStepFooterButton onClickBefore={() => {}} onClickNext={() => {}} state="next" />
      </div>
    </section>
  );
}

export default ExpertMajorCategoryTemplete;
