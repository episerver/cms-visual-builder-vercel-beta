import Image from "@/components/shared/cms_image"
import Link from "next/link"
import { forwardRef } from "react"
import { type ReferenceDataFragment, type Maybe } from "@/gql/graphql"

type LogoProps = {
  logoItem?: Maybe<ReferenceDataFragment>
  logoAltText?: string
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(({ logoItem, logoAltText = "Mosey Bank Logo" }, ref) => {
  return (
    <div className="flex align-middle" ref={ref}>
      <Link href="/" className="mr-[28px]">
        <Image
          src={ logoItem }
          fallbackSrc="/assets/moseybank-logo.svg"
          alt={ logoAltText }
          width={200}
          height={36}
          unoptimized
        />
      </Link>
    </div>
  );
});

Logo.displayName = "Header logo";

export default Logo;