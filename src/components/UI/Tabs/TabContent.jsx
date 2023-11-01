import React from 'react';
import Badge from '../Badge.jsx';
import SocialMediaIcon from '../../SocialMediaIcon.jsx';

export default function TabContent({ content, skills, hyperlink }) {
  return (
    <div className='font-high-l  dark:font-[280] font-[399] leading-6 mt-6'>
      <section>
        {content}
      </section>

      <a href={hyperlink} target='_blank' rel='noreferrer' className='text-center text-lg border-2 mt-5 inline-block mx-auto rounded-2xl px-2 font-sans border-sky-200 cursor-pointer'>
        Github Repo
        <SocialMediaIcon type="github" hyperlink={hyperlink} />
      </a>

      <section className="flex flex-wrap gap-3 mt-5">
        {skills.map(skill => <Badge>{skill}</Badge>)}
      </section>
    </div>
  )
}
