import React from "react";
import MemberCard from "./MemberCard";
import "./AboutUs.css";
import co from "../images/ChrisO.png";
import ch from "../images/ChrisH.png";
import cb from "../images/KuramuraLogo.png";
import rn from "../images/RazvanN.png";
import kj from "../images/Kjie.png";
import jh from "../images/Josh.png";
import logo from "../images/logo.png";
import Row from "react-bootstrap/Row";

function AboutUs() {
	return (
		<div>
			<div className="mission-container">
				<h1 className="mission-title">Not Evil Studios</h1>
				<p className="mission-text">
					Not Evil Studios is an indie game development studio with 7 team members based in the
					Southwest of England. At the moment, our in progress projects include Fling, a 2D physics
					based mobile game, as well as Cat-Astrophe, a 3D PC game where Cats fight one another with
					Fishy weapons.
				</p>
			</div>

			<div className="team">
				<h1 className="team-title">Team Members</h1>

				<div className="team-container">
					<Row>
						<MemberCard
							img={co}
							alt="photo with Chris Oliver"
							name="Christopher Oliver"
							roles="CFO, Lead Sound Designer,Co-Founder"
							info="Gamer, Musician and Dad"
							showTwitter="true"
							twitter="https://twitter.com/EskimoShadow"
							showLinkedIn="true"
							linkedin="https://www.linkedin.com/in/christopher-oliver-a19798233/"
						/>

						<MemberCard
							img={ch}
							alt="photo with Chris Hughes"
							name="Chris Hughes"
							roles="Technical lead, Lead Programmer, Co-Founder"
							info="Lover of games, and a fan of quirky mechanics"
							twitter="https://twitter.com/NotEvilChris993"
							showTwitter="true"
							wix="https://chrishughes1993.wixsite.com/chrishughes "
							showWix="true"
							showGitHub="true"
							github="https://github.com/ChrisSHughes "
						/>

						<MemberCard
							img={cb}
							alt="photo with Kuramura"
							name="Kuramura"
							roles="Tech Lead, Co-Founder"
							info="I love games with immersive stories and interesting gameplay mechanics, 
							I enjoy programming and problem solving"
							showYoutube="true"
							youtube="https://www.youtube.com/channel/UChxe-VXG_Yzgkj6X6whsLxg"
							showGitHub="true"
							github="https://github.com/Kuramura300"
							showWebsite="true"
							website="https://kuramura.akemi.ai/"
							showTwitter="true"
							twitter="https://twitter.com/Kuramura300"
						/>

						<MemberCard
							img={kj}
							alt="photo with Kjellon Morris"
							name="Kjellon Morris"
							roles="Head of 2D Art, Co-Founder"
							info="Full time creative and mocha enthusiast."
							showInstagram="true"
							instagram="https://www.instagram.com/kjekje42/"
							showLinkedIn="true"
							linkedin="https://www.linkedin.com/in/kjellon-morris-10a55816b/"
							showTwitter="true"
							twitter="https://twitter.com/kjekje42"
						/>

						<MemberCard
							img={rn}
							alt="photo with Razvan Nica"
							name="Razvan Nica"
							roles="Web Developer, Lead 3D Artist, Co-Founder"
							info="I love multiplayer games and traveling to new places."
							twitter="https://twitter.com/razvan58686269"
							showTwitter="true"
							linkedin="https://www.linkedin.com/in/razvan-nica-b429101b8/"
							showLinkedIn="true"
							instagram="https://www.instagram.com/razvannica/"
							showInstagram="true"
							facebook="https://www.facebook.com/nica.razvan.12"
							showFacebook="true"
						/>

						<MemberCard
							img={jh}
							alt="photo with Josh Kinver"
							name="Josh Kinver"
							roles="Head of PR, Head of HR, Co-Founder"
							info="Emotional support dandelion, slight drama queen, lover of playing games, writing stories, and listening to music."
							github="https://github.com/jkinver"
							showGitHub="true"
							facebook="https://www.facebook.com/profile.php?id=100090679399523"
							showFacebook="true"
							linkedin="https://www.linkedin.com/in/joshua-kinver-a24a0a255/"
							showLinkedIn="true"
							twitter="https://twitter.com/joshua_kinver"
							showTwitter="true"
						/>

						<MemberCard
							img={logo}
							alt="photo with PSC"
							name="PSC"
							roles="CEO, Co-Founder"
							info="Gamer, Book Enjoyer, Spreadsheet Maniac"
							showFacebook="true"
							facebook="https://www.facebook.com/PhilSC95"
						/>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
