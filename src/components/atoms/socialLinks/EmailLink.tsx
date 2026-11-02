import { FaEnvelope } from 'react-icons/fa6';
import { EMAIL_HREF, SOCIAL_LINKS } from './links';
import { SocialLink } from './SocialLink';
import type { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof SocialLink>, 'href' | 'label' | 'icon' | 'external'>;

export default function EmailLink(props: Props) {
  return (
    <SocialLink
      href={EMAIL_HREF}
      label={`Email ${SOCIAL_LINKS.emailAddress}`}
      icon={<FaEnvelope className="h-5 w-5" />}
      external={false}
      {...props}
    />
  );
}
