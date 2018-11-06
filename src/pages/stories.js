import React, { Component, Fragment } from "react"
import styled from "styled-components"

import arrow_right_black from "../assets/ui/arrow_right_black.svg"
import rebecca_and_matt from "../assets/photos/rebecca_and_matt.png"
import becky_and_johanna from "../assets/photos/becky_and_johanna.png"
import coding_stress from "../assets/photos/coding_stress.png"
import boot_camp_rebels from "../assets/photos/boot_camp_rebels.png"
import get_with_the_program from "../assets/photos/get_with_the_program.png"
import little_window from "../assets/photos/little_window.png"

import Layout from "../components/Layout"
import InnerGridContainer from "../components/InnerGridContainer"
import { DOWN_CURSOR } from "../constants"
import DoubleLine from "../components/DoubleLine"
import Story from "../components/Story"

import HeadingWithBody from "../components/HeadingWithBody"
import { Cursor } from "../components/Cursor"
import { BigUnderline } from "../components/Text"
import { NextPanel, Panel } from "../components/Panel"

const _StoryContainer = styled.section.attrs({
  className: "flex flex-wrap justify-between",
})``

const StoryContainer = ({ children }) => (
  <Fragment>
    <_StoryContainer>{children}</_StoryContainer>
    {children.length > 3 && (
      <div className="mt2 lh-copy ttu flex items-center pointer">
        More
        <img className="ml2 w1" src={arrow_right_black} />
      </div>
    )}
  </Fragment>
)
class StoriesPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <main>
          <InnerGridContainer>
            <Panel justify="center justify-end-ns" className="mt7 mb6-ns mb5">
              <div className="w-75-ns w-90">
                <BigUnderline>Stories by and about us</BigUnderline>
              </div>
            </Panel>
            <HeadingWithBody title="Overview">
              Curious to learn more about us? Here you’ll find stories by and
              about our diverse community of founders and coders making a social
              impact with technology all over the world.
            </HeadingWithBody>
            <DoubleLine colour="red" />
            <HeadingWithBody title="Stories by us" className="mb7">
              <StoryContainer>
                <Story
                  colour="yellow"
                  img={rebecca_and_matt}
                  heading="“The biggest challenge is checking yourself at the door”"
                  subtitle="Matt King talks about his experiences mentoring and facilitating at Founders and Coders in London…"
                  author="Founders and Coders"
                  date="Sep 3"
                  url={"https://medium.com/founders-coders/user-journey-matt-king-9ee447cff990"}
                />
                <Story
                  colour="blue"
                  img={becky_and_johanna}
                  heading="From Coders to Founders: The Workbird story"
                  subtitle="How Becky Botha and Johanna Herman learnt to code and launched Workerbird, a Tech for Good startup, in less than a year"
                  author="Founders and Coders"
                  date="Sep 10"
                  url="https://medium.com/@founderscoders/from-coders-to-founders-the-workerbird-story-d62a1cb01c98"
                />
                <Story
                  colour="green"
                  heading="How to run free, peer-led coding bootcamps - an interview with Dan Sofer"
                  subtitle="Dan Sofer talks about running free, peer-led coding bootcamps in London and Gaza and why he loves working with nonprofits"
                  author="Founders and Coders"
                  date="Sep 25"
                  url="https://medium.freecodecamp.org/how-to-run-free-peer-led-coding-bootcamps-an-interview-with-dan-sofer-3e0a82ed45e"
                />
              </StoryContainer>
            </HeadingWithBody>
            <HeadingWithBody title="Stories about us" className="mb7">
              <StoryContainer>
                <Story
                  colour="yellow"
                  heading="How I became a Web Developer in 5 Months"
                  subtitle="One year ago I was a non-technical founder of a startup at the edge of bankruptcy. Today I work as a…"
                  author="Per Harald Borgen"
                  date="Nov 26, 2015"
                  url="https://medium.com/founders-coders/from-non-technical-to-hired-in-5-months-d010f601b1bc"
                />
                <Story
                  colour="blue"
                  heading="London tech developers to set up new worker co-op"
                  subtitle="How Becky Botha and Johanna Herman learnt to code and launched Workerbird, a Tech for Good startup, in less than a year"
                  author="Founders and Coders"
                  date="Sep 22"
                  url="https://www.thenews.coop/130580/topic/technology/london-tech-developers-set-new-worker-co-op/"
                />
                <Story
                  colour="green"
                  heading="How to Choose The Right Coding Bootcamp"
                  img={coding_stress}
                  subtitle="Last year I went through the Founders and Coders (FAC) software training program in London in order to turn my hobby into a living…"
                  author="Per Harald Borgen"
                  date="Jan 19 2016"
                  url="https://medium.com/learning-new-stuff/how-to-choose-the-right-coding-bootcamp-364efd35a63c"
                />
                <Story
                  colour="red"
                  img={little_window}
                  heading="Building Little Window: how we created a chatbot for Chayn"
                  subtitle="Little Window — one of the first chatbot and AI innovations at the intersection of gender-based violence and tech for good..."
                  author="Johanna Herman"
                  date="Apr 15"
                  url="https://medium.com/hack-for-chayn/building-little-window-how-we-created-a-chatbot-for-chayn-682ecf7bd495"
                />
                <Story
                  colour="blue"
                  heading="4 Ways I Got Into My Dream Coding Bootcamp And How You Can Too"
                  subtitle="OI’d imagined my reaction to a “yes” in many ways but couldn’t quite brace myself for the moment…"
                  author="Jem Abulhawa"
                  date="Sep 20 2017"
                  url="https://medium.com/@jema28/4-ways-i-got-into-my-dream-coding-bootcamp-and-how-you-can-too-563af36ac78"
                />
                <Story
                  colour="yellow"
                  heading="How studying law helped me with programming"
                  subtitle="When I decided to learn to code, I didn’t expect there to be anything other than work ethic that would be transferable from my law degree."
                  author="Katerina Pascoulis"
                  date="Aug 2 2018"
                  url="https://hackernoon.com/how-studying-law-helped-me-with-programming-6af88ac77a8e"
                />
                <Story
                  colour="red"
                  heading="The Mothercode: career-changing into tech with kids"
                  subtitle="What I learnt whilst embarking on a career switchup in the midst of family life."
                  author="Johanna Herman"
                  date="Oct 8 2017"
                  url="https://code.likeagirl.io/the-mothercode-career-changing-into-tech-with-kids-d16a44f70f29"
                />
                <Story
                  colour="green"
                  heading="Building Little Window: how we created a chatbot for Chayn"
                  subtitle="Little Window — one of the first chatbot and AI innovations at the intersection of gender-based violence and tech for good..."
                  author="Johanna Herman"
                  date="Apr 15"
                  url="https://medium.com/hack-for-chayn/building-little-window-how-we-created-a-chatbot-for-chayn-682ecf7bd495"
                />
                <Story 
                  color="yellow"
                  heading="Perspectives: technology, mental health and children and young people"
                  subtitle="We’ve known for a while that the learning collaborative needs ways of accelerating the use of digital technology in children and young people’s mental health..."
                  author="Healthy London Partnership"
                  date="24 May 2016"
                  url="https://medium.com/mental-health-in-london/perspectives-technology-mental-health-and-children-and-young-people-2a8c5a65a8ad"
                />
                <Story 
                  color="blue"
                  heading="Fusing nonprofits with tech talent"
                  subtitle="Throw together four of the UK’s most innovative charities (aka our debut Fusiliers), 16 mega-brains in the form of Founders & Coders’ latest cohort, delicious..."
                  author="CAST"
                  date="25 May 2016"
                  url="https://medium.com/@wearecast/fusing-nonprofits-with-tech-talent-bddd5ddbe7bb"
                />
                <Story 
                  color="green"
                  heading="You might not need that $15K coding bootcamp"
                  subtitle="Coding bootcamps have exploded in popularity the past few years. I’m not against them. If they help you get started on a well-paid career in tech..."
                  author="Per Harold Borgen"
                  date="5 Dec 2016"
                  url="https://medium.freecodecamp.org/you-might-not-need-that-15k-coding-bootcamp-be0ba9697885"
                />
                <Story 
                  color="red"
                  heading="Not a hacker or a hipster: How I got my first start-up job"
                  subtitle="I was first introduced to start-ups as a career choice during my post-uni “I’m not getting a city job” phase. Although that’s still..."
                  author="Katerina Pascoulis"
                  date="30 Jul 2015"
                  url="https://medium.com/tech-london/not-a-hacker-or-a-hipster-how-i-got-my-first-start-up-job-922399a7dfbb"
                />
                <Story 
                  color="blue"
                  heading="Find a job at a Start-up: resources"
                  subtitle="Last month I did a talk for WarwickTECH about how to find a job at a start-up after graduating. This was motivated by the fact that when..."
                  author="Katerina Pascoulis"
                  date="24 Feb 2017"
                  url="https://medium.com/@KatAlexPas/find-a-job-at-a-start-up-resources-8c477db1cbbc"
                />
                <Story 
                  color="yellow"
                  heading="How I learnt to code in a scarily short space of time"
                  subtitle="Six months ago I left my “wow, what you do sounds really interesting” job so I could teach myself to code. Before that happened..."
                  author="Katerina Pascoulis"
                  date="19 Feb 2016"
                  url="https://www.gadgette.com/2016/02/19/how-i-learnt-to-code-in-a-scarily-short-space-of-time/"
                />
                <Story 
                  color="red"
                  heading="Meet Michelle: Languages Graduate turned Coder at Fashion Startup 'Mode For Me'"
                  subtitle="Meet Michelle Garrett, one of the brilliant brains behind ModeForMe, a new fashion crowdfunding platform currently in development... "
                  author="TechStyler"
                  date="8 Oct 2018"
                  url="http://techstyler.fashion/meet-michelle-languages-graduate-turned-coder-at-fashion-startup-mode-for-me/"
                />
                <Story 
                  color="green"
                  heading="Snoop Dogg and identity at Blockchain Week in NYC"
                  subtitle="Blockchain Week in NYC is a busy week for all things crypto; conferences, hackathons and even parties with Snoop Dogg performing."
                  author="Rachel Black"
                  date="31 May 2018"
                  url="https://www.yoti.com/blog/rachels-week-at-blockchain-week-in-nyc/"
                />
                <Story 
                  color="yellow"
                  heading="Yoti Charity Hackathon - what happened next? The Centrepoint story"
                  subtitle="In February 2017, we held a hack week to learn from on-the-ground charity staff about how our identity checking system can help solve local and global problems..."
                  author="Yoti Blog"
                  date="1 Jun 2017"
                  url=""
                />
                <Story 
                  color="blue"
                  heading="Founders and Coders"
                  subtitle="I've had the pleasure of working these talented coders from Founders & Coders, a social enterprise that offers free coding training..."
                  author="Lambeth Larder"
                  date="12 Apr 2018"
                  url="http://www.lambethlarder.org/blog/founders-coders"
                />
                <Story 
                  color="green"
                  heading="How I went from 33-year-old museum tour guide to professional Web Developer and UX Designer: My 18-month coding journey"
                  subtitle="My story is a bit different from the stories you have read so many times. I did not get my first web development job in 3 months. Not in 6 months. Not even in a year."
                  author="Vered Rekanati Mordechai"
                  date="28 Apr 2018"
                  url="https://medium.freecodecamp.org/the-post-i-hoped-to-write-for-18-months-2902d074f5ba"
                />
              </StoryContainer>
            </HeadingWithBody>
            <HeadingWithBody title="From the press" className="mb7">
              <StoryContainer>
                <Story
                  colour="yellow"
                  img={boot_camp_rebels}
                  heading="Boot camp rebels: tech developers quit corporate careers"
                  subtitle="Disappointed with “big tech”, coders are starting social impact start-ups. To some, technology companies represent the future..."
                  author="Aliya Ram"
                  publication="Financial Times"
                  date="Oct 26, 2017"
                  url="https://www.ft.com/content/cd3842d4-8902-11e7-afd2-74b8ecd34d3b"
                />
                <Story
                  colour="blue"
                  img={get_with_the_program}
                  heading="Get with the program: the codeers offering training for free"
                  subtitle="It’s the must-have skill-set of the 21st century, yet unless you’re rich enough to afford the training, or fortunate enough to be attending…"
                  author="Kit Buchan"
                  publication="The Guardian"
                  date="Jul 26, 2015"
                  url="https://www.theguardian.com/technology/2015/jul/26/founders-coders-coding-free-training-london"
                />
                <Story
                  colour="green"
                  heading="The Free Coding Academy Model: How to Teach Our Next Generation…"
                  subtitle="The world needs more trained software engineers; it’s a basic fact. The world also urgently needs more of those…"
                  author="Adrian Bridgewater"
                  publication="Forbes"
                  date="Aug 31, 2015"
                  url="https://www.forbes.com/sites/adrianbridgwater/2015/08/13/the-free-coding-academy-model-how-to-teach-our-next-generation-of-programmers/#6b07b18829c5"
                />
                <Story
                  colour="red"
                  heading="Web developers crack the tuition code to snap up Young Co-operators Prize"
                  subtitle="Full-time courses in software development do not usually come cheap. Even at the lower end of the market students are likely to be…"
                  publication="Co-op UK"
                  date="Mar 31, 2015"
                  url="http://www.uk.coop/newsroom/web-developers-crack-tuition-code-snap-young-co-operators-prize"
                />
                <Story
                  colour="blue"
                  heading="Wireless in Gaza: the whizz-kids making code "
                  subtitle="Gaza City academy hopes its hi-tech business model will be immune to physical barriers to trade"
                  publication="The Guardian"
                  date="5 Jul 2018"
                  url="https://www.theguardian.com/world/2018/jul/05/wireless-in-gaza-the-code-school-bringing-hope-to-the-strip"
                />
                <Story
                  colour="yellow"
                  heading="Meet the female forces driving the Arab world’s digital revolution"
                  subtitle="With more women in tech per capita than anywhere else in the world, the Middle East is the place to be if you want to ride the digital wave..."
                  publication="Vogue"
                  date="11 Jul 2018"
                  url="https://www.vogue.in/content/meet-the-female-tech-innovators-of-the-middle-east/"
                />
                <Story
                  colour="red"
                  heading="World Bank recognises Gaza Sky Geeks as key player in Palestine's tech startup ecosystem"
                  subtitle="Since 2011, Gaza Sky Geeks have been launching coding bootcamps, accelerating startups, and helping them compete globally."
                  publication="Startup Scene"
                  date="19 Jun 2018"
                  url="http://www.startupsceneme.com/INVESTMENTS/World-Bank-Recognises-Gaza-Sky-Geeks-As-Key-Player-In-Palestine-s-Tech-Startup-Ecosyste"
                />
                <Story
                  colour="green"
                  heading="He Found A Way Out Of Gaza. Then, Something Drew Him Back."
                  subtitle="“Iyad, you need to open the door for the donkey,” his grandfather said sometimes after he woke from a dream..."
                  publication="Forbes"
                  date="31 May 2018"
                  url="https://www.forbes.com/sites/elizabethmacbride/2018/05/31/when-entrepreneurship-is-a-lifeline-gaza-sky-geeks-doubles-in-size/#731d11d45372"
                />
                <Story
                  colour="yellow"
                  heading="Geeking out in Gaza: Creating a Palestinian coding hub"
                  subtitle="Many in the tech world will point to Tel Aviv when asked which Middle Eastern city is thriving as a tech hub. The bustling Israeli metropolis has indeed developed..."
                  publication="Venture Beat"
                  date="20 Apr 2018"
                  url="https://venturebeat.com/2018/04/20/geeking-out-in-gaza-creating-a-palestinian-coding-hub/"
                />
                <Story
                  colour="blue"
                  heading="Cracking the code: Young Palestinians take hold of their futures at Gaza's tech hub"
                  subtitle="Suffering from one of the highest unemployment rates in the world, Gaza-based software firms have launched coding academies across the Palestinian Territories to help create jobs"
                  publication="Independent"
                  date="27 Aug 2018"
                  url="https://www.independent.co.uk/news/world/middle-east/gaza-strip-sky-geeks-palestinian-tech-hub-west-bank-future-a8510181.html"
                />
                <Story
                  colour="green"
                  heading="Founders & Coders pooling developer talent through free education course"
                  subtitle="Employers testing students’ skills through freelance projects instead of paying recruitment agency fees"
                  publication="Computer Weekly"
                  author="Kayleigh Bateman"
                  date="5 Dec 2014"
                  url="https://www.computerweekly.com/news/2240236082/Founders-Coders-pooling-developer-talent-through-free-education-course"
                />
                <Story
                  colour="red"
                  heading="Founders and Coders Interview"
                  subtitle="Dan Sofer is the founding director of Founders & Coders C.I.C, the first full-time adult programming school in the UK to offer its services completely free of charge."
                  publication="Farnell"
                  url="https://uk.farnell.com/founders-and-coders-interview"
                />
                <Story
                  colour="blue"
                  heading="Founders & Coders: The UK’s Only Free Coding Academy"
                  subtitle="Founders & Coders is a non-profit social enterprise based in London. A free school and co-operative of coders..."
                  publication="IntelligentHQ"
                  date="18 Aug 2015"
                  url="https://www.intelligenthq.com/innovation-management/founders-coders-the-uks-only-free-coding-academy/"
                />

              </StoryContainer>
            </HeadingWithBody>
            <HeadingWithBody title="Podcasts" className="mb7">
              <StoryContainer>
                <Story
                  colour="yellow"
                  heading="GeekGirl Meets Katerina Pascoulis, CEO & Co-Founder at Personably"
                  subtitle="First up: meet Katerina Pascoulis, a coder and entrepreneur who’s passionate about getting other women into tech…"
                  publication="GeekGirl Meetup UK"
                  date="Sep 2018"
                  url="https://soundcloud.com/geekgirl-meetup-uk/geekgirl-meets-katerina-pascoulis-ceo-co-founder-at-personably"
                />
                <Story
                  colour="blue"
                  heading="The Founders and Coders Podcast Episode 1: The first and the worst"
                  subtitle="FAC14 talk first-day nerves, Accessibility, and DOM manipulation in the first ever episode of the podcast."
                  publication="Founders and Coders Podcast"
                  date="Jul 2018"
                  url="https://soundcloud.com/founders-coders/podcast-episode-001-the-first-and-worst"
                />
                <Story
                  colour="green"
                  heading="The Founders and Coders Podcast Episode 2: Radioactivity, Russia, APIs and JSON"
                  subtitle="Jumping into week 3, FAC14 attempt to explain APIs and why Wikipedia is never a coder's friend."
                  publication="Founders and Coders Podcast"
                  date="Aug 2018"
                  url="https://soundcloud.com/founders-coders/podcast-ep-2-radioactivity-russia-apis-gifs-and-json"
                />
                <Story
                  colour="red"
                  heading="The Founders and Coders Podcast Episode 3: Node.js, Speech APIs and grads without a CORS"
                  subtitle="Oh node you don't. FAC14 and alum Aisha discuss Node.js, Node projects and Aisha's experiences since finishing FAC"
                  publication="Founders and Coders Podcast"
                  date="Sep 2018"
                  url="https://soundcloud.com/founders-coders/podcast-ep-003-node-js-speech-apis-and-grads-without-a-cors"
                />
              </StoryContainer>
            </HeadingWithBody>
            <NextPanel component={this} to="/" topBorder>
              Back to homepage
            </NextPanel>
          </InnerGridContainer>
        </main>
      </Layout>
    )
  }
}
export default StoriesPage
