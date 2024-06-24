import Image from "@/components/shared/cms_image"
import Link from "next/link"
import { forwardRef } from "react"
import { type ReferenceDataFragment, type Maybe } from "@/gql/graphql"

type LogoProps = {
  logoItem?: Maybe<ReferenceDataFragment>
  darkLogoItem?: Maybe<ReferenceDataFragment>
  logoAltText?: string
  darkLogoAltText?: string
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(({ logoItem, darkLogoItem, logoAltText = "Mosey Bank Logo", darkLogoAltText }, ref) => {
  return (
    <div className="flex align-middle" ref={ref}>
      <Link href="/" className="mr-[28px]">
        <Image
          src={ logoItem }
          fallbackSrc="/assets/moseybank-logo.svg"
          alt={ logoAltText }
          width={ 200 }
          height={ 36 }
          unoptimized
          priority
          className="inline-block dark:hidden"
        />
        <Image
          src={ darkLogoItem ?? logoItem }
          fallbackSrc="/assets/moseybank-logo.svg"
          alt={ darkLogoAltText ?? logoAltText }
          width={ 200 }
          height={ 36 }
          unoptimized
          priority
          className="dark:inline-block hidden"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
});

Logo.displayName = "Header logo";

export default Logo;