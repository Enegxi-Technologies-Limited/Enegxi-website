import { FaGithub } from 'react-icons/fa6';
import { SOCIAL_LINKS } from './links';
import { SocialLink } from './SocialLink';
import type { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof SocialLink>, 'href' | 'label' | 'icon'>;

export default function GitHubLink(props: Props) {
  return <SocialLink href={SOCIAL_LINKS.github} label="GitHub" icon={<FaGithub className="h-5 w-5" />} {...props} />;
}
