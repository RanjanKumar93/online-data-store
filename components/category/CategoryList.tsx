"use client";

import { cn } from "@/lib/utils";
import GlobalApi from "@/utils/GlobalApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Category {
  name: string;
  categorySlug: string;
}

const CategoryList: React.FC = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const pathname: string = usePathname();
  console.log(pathname);
  const getCategory = (): void => {
    GlobalApi.getCategoryList().then((resp: any): void => {
      setCategoryList(resp?.categories ?? []);
    });
  };

  useEffect((): void => {
    getCategory();
  }, []);

  return (
    <section className="bg-slate-100 sticky left-0 top-0 flex h-screen w-fit flex-col justify-between p-6 pt-28 max-sm:hidden lg:w-[17rem]">
      <div className="flex flex-col gap-6 ">
        {categoryList.map((category: Category): JSX.Element => {
          const isActive: boolean =
            pathname === `/${category.categorySlug}` ||
            pathname.startsWith(`/${category.categorySlug}`);
          return (
            <Link
              key={category.name}
              href={`/${category.categorySlug}`}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-700": isActive }
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
