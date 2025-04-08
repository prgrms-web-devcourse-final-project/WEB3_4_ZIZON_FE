import StoreProductDetailTemplate from '@/components/templates/store/storeProductDetail/StoreProductDetailTemplate';

export interface DigitalContentType {
  id: number;
  file_name: string;
  file_url: string;
  file_size: number;
  file_type: string;
  download_limit: number;
}

export interface ProductDetailType {
  product_id: number;
  expert_id: number;
  title: string;
  price: number;
  stock: number;
  product_type: string;
  thumbnail_image: string;
  digital_contents: DigitalContentType[];
  created_at: string;
  description: string;
  expert_name: string;
}

const DUMMY_PRODUCT: ProductDetailType = {
  expert_name: '펫프랜즈',
  created_at: '2025-03-25T12:00:00Z',
  product_id: 1,
  expert_id: 1,
  title: 'AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의 ',
  description:
    'AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의AI로 한땀 한땀 만들지 말고 자동으로 기깔나게 만드는 나만의 캐릭터 만들기 강의',
  price: 10000,
  stock: 10,
  product_type: 'digital',
  thumbnail_image: '/images/DefaultImage.png',
  digital_contents: [
    {
      id: 1,
      file_name: 'character.png',
      file_url: '/images/DefaultImage.png',
      file_size: 1024,
      file_type: 'image/png',
      download_limit: 5,
    },
  ],
};

export default async function ProductIdPage({
  searchParams,
}: {
  searchParams: { product_id: string };
}) {
  // 상품 상세정보 조회 api 호출
  return (
    <div className="flex justify-center mt-72">
      <StoreProductDetailTemplate product={DUMMY_PRODUCT} />
    </div>
  );
}
