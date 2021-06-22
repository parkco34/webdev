import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Background from '../components/Background';
import theImage from '../Images/subImages/misc1.jpg';
import bkImage from '../Images/cyber_city2.jpg';
import image2 from '../Images/aitouch.jpg';
import poem from '../Images/mypoem.jpg';
import image3 from '../Images/subImages/misc2.jpg';
import ThePaper from '../components/ThePaper';
import ResponsiveNav from '../components/ResponsiveNav.js';
import thelogo from '../Images/logo22.jpg';
import ScrollEffect from '../components/ScrollEffect';
import revenge from '../Images/revenge.jpg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '100vw',
        maxHeight: '100vh',

        '& .sxn': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
        },
        '& .sub-sxn': {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 auto',
        },
        '& .paper-sheet': {
            backgroundImage: `url(${image3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        '& .papers-bk': {
			width: '100%',
			height: '655px',
            backgroundColor: 'white',
            backgroundImage: `url(${bkImage})`,
            backgroundSize: 'cover',
			backgroundPosition: 'center',
        },
		'& .me-poem': {
			display: 'none',
		}
//        '& .hideme': {
//            // Use PROPS for this!
//            visibility: 'hidden',
//        },
    }
})

const Goal = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header className="da-header">
                <ResponsiveNav hintColor="transparent" fontcolor="black" scrollingFontColor="white" logo={thelogo} />

            </header>
            <section className="sxn">
                <div className="sub-sxn first-img">
                    <img src={theImage} className="hideme" style={{width: '1500px', hegith: '900px', overflow: 'hidden'}} alt="No Image Found!"/>
                </div>
            </section>

            <section className="sxn papers-bk">
                <div className="sub-sxn">
                    <ThePaper className="paper-sheet"/>
                </div>

                <div className="sub-sxn">
                    <ThePaper className="paper-sheet"/>
                </div>
            </section>

            <section className="sxn">
                <div className="sub-sxn me-poem">
                    <img src={poem} className="my-poem" alt="CLASSIFIED"/>
                </div>
            </section>
			
            <section className="sxn">
                <div className="sub-sxn scroll-effect">
                    <img src={revenge} className="my-poem" alt="CLASSIFIED"/>
					<ScrollEffect Img1={image2}/>
                </div>
            </section>
        </div>
    );
}

export default Goal;

// Delete this after inspection:
//import React, {useState} from 'react';
//import theImage from '../Images/subImages/misc1.jpg';
//import ResponsiveNav from '../components/ResponsiveNav.js';
//import {Parallax, Background} from 'react-parallax';
//import melogo2 from '../Images/logo2.jpg';
//import Comp from '../components/parallax';
//
//const Goal = props => {
//    return (
//        <div style={{backgroundColor: 'white', color: 'black', width: '100vw', height: '100%'}}>
//            <section className="sxn" style={{backgroundImage: `url(${theImage})`}}>
//                <ResponsiveNav hintColor="white" fontcolor="white" scrollingFontColor="black" logo={melogo2} />
//            </section>
//            <section>
//                <div className="sxn2-container">
//					<p className="paragraph" style={{position: 'relative', margin: '7% 0 0 0', padding: '0 50px'}}>“For those who believe in God, most of the big questions are answered. But for those of us who can't readily accept
//						the God formula, the big answers don't remain stone-written. We adjust to new conditions and discoveries. We are pliable.
//						Love need not be a command nor faith a dictum. I am my own god. We are here to unlearn the teachings of the church, state,
//						and our educational system. We are here to drink beer. We are here to kill war. We are here to laugh at the odds and live our
//						lives so well that Death will tremble to take us.”</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>“what matters most is how well you walk through the fire”</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>“That's the problem with drinking, I thought, as I poured myself a drink. If something bad happens you drink in an attempt to
//						forget; if something good happens you drink in order to celebrate; and if nothing happens you drink to make something happen.”</p>
//					<br/>
//					<hr style={{border: '3px solid black'}} />
//					<div className="interupt" style={{width: '100%', height: '100px', padding: '65px', textAlign: 'center', backgroundColor: 'lightgrey'}}>
//						<strong>This should be my parallax effect somewhere...</strong>
//						<Comp />
//					</div>
//					<hr style={{border: '3px solid black'}} />
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>The true man wants two things: danger and play. For that reason he wants woman, as the most dangerous plaything.</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>"Blessed are the forgetful, for they get the better even of their blunders."</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>“Here the ways of men divide. If you wish to strive for peace of soul and happiness, then believe; if you wish to be a disciple of truth, then inquire."</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>“The lonely one offers his hand too quickly to whomever he encounters.”</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>“You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.”</p>
//					<br/>
//					<p className="paragraph" style={{margin: '0 auto', padding: '0 50px'}}>“The true man wants two things: danger and play. For that reason he wants woman, as the most dangerous plaything.”</p>
//					<br />
//					<br />
//					<br />
//					<br />
//					<br />
//					<br />
//					<br />
//					<br />
//					<div className="words">
//						Kant published the Critique of Pure Reason in 1781. It is very long and almost unreadable due to its dry prose and complex terminology. Kant tried to ease his readers’ confusion by publishing the Prolegomena to Any Future Metaphysics two years later. While it is hardly a page-turner, the Prolegomena is much briefer than the Critique and much more accessible in style, making it a valuable entry point to Kant’s metaphysics and epistemology.
//
//Kant’s primary aim is to determine the limits and scope of pure reason. That is, he wants to know what reason alone can determine without the help of the senses or any other faculties. Metaphysicians make grand claims about the nature of reality based on pure reason alone, but these claims often conflict with one another. Furthermore, Kant is prompted by Hume’s skepticism to doubt the very possibility of metaphysics.
//
//Kant draws two important distinctions: between a priori and a posteriori knowledge and between analytic and synthetic judgments. A posteriori knowledge is the particular knowledge we gain from experience, and a priori knowledge is the necessary and universal knowledge we have independent of experience, such as our knowledge of mathematics. In an analytic judgment, the concept in the predicate is contained in the concept in the subject, as, for instance, in the judgment, “a bachelor is an unmarried man.” (In this context, predicate refers to whatever is being said about the subject of the sentence—for instance, “is an unmarried man.”) In a synthetic judgment, the predicate concept contains information not contained in the subject concept, and so a synthetic judgment is informative rather than just definitional. Typically, we associate a posteriori knowledge with synthetic judgments and a priori knowledge with analytic judgments. For instance, the judgment “all swans are white” is synthetic because whiteness is not a part of the concept of “swan” (a black swan would still be a swan even though it isn’t white), but it is also a posteriori because we can only find out if all swans are white from experience.
//
//Kant argues that mathematics and the principles of science contain synthetic a priori knowledge. For example, “7 + 5 = 12” is a priori because it is a necessary and universal truth we know independent of experience, and it is synthetic because the concept of “12” is not contained in the concept of “7 + 5.” Kant argues that the same is true for scientific principles such as, “for every action there is an equal an opposite reaction”: because it is universally applicable, it must be a priori knowledge, since a posteriori knowledge only tells us about particular experiences.
//
//The fact that we are capable of synthetic a priori knowledge suggests that pure reason is capable of knowing important truths. However, Kant does not follow rationalist metaphysics in asserting that pure reason has the power to grasp the mysteries of the universe. Instead, he suggests that much of what we consider to be reality is shaped by the perceiving mind. The mind, according to Kant, does not passively receive information provided by the senses. Rather, it actively shapes and makes sense of that information. If all the events in our experience take place in time, that is because our mind arranges sensory experience in a temporal progression, and if we perceive that some events cause other events, that is because our mind makes sense of events in terms of cause and effect. Kant’s argument has a certain parallel to the fact that a person wearing blue-tinted sunglasses sees everything in a bluish light: according to Kant, the mind wears unremovable time-tinted and causation-tinted sunglasses, so that all our experience necessarily takes place in time and obeys the laws of causation.
//
//Time and space, Kant argues, are pure intuitions of our faculty of sensibility, and concepts of physics such as causation and inertia are pure intuitions of our faculty of understanding. Sensory experience only makes sense because our faculty of sensibility processes it, organizing it according to our intuitions of time and space. These intuitions are the source of mathematics: our number sense comes from our intuition of successive moments in time, and geometry comes from our intuition of space. Events that take place in space and time would still be a meaningless jumble if it were not for our faculty of understanding, which organizes experience according to the concepts, like causation, which form the principles of natural science.
//					</div>
//					<div>
//						Set theory begins with a fundamental binary relation between an object o and a set A. If o is a member (or element) of A, the notation o ∈ A is used.[7] A set is described by listing elements separated by commas, or by a characterizing property of its elements, within braces { }.[8] Since sets are objects, the membership relation can relate sets as well.
//
//A derived binary relation between two sets is the subset relation, also called set inclusion. If all the members of set A are also members of set B, then A is a subset of B, denoted A ⊆ B.[7] For example, {1, 2} is a subset of {1, 2, 3}, and so is {2} but {1, 4} is not. As implied by this definition, a set is a subset of itself. For cases where this possibility is unsuitable or would make sense to be rejected, the term proper subset is defined. A is called a proper subset of B if and only if A is a subset of B, but A is not equal to B. Also, 1, 2, and 3 are members (elements) of the set {1, 2, 3}, but are not subsets of it; and in turn, the subsets, such as {1}, are not members of the set {1, 2, 3}.
//
//Just as arithmetic features binary operations on numbers, set theory features binary operations on sets.[9] The following is a partial list of them:
//
//Union of the sets A and B, denoted A ∪ B,[7] is the set of all objects that are a member of A, or B, or both.[10] For example, the union of 1, 2, 3 and 2, 3, 4 is the set 1, 2, 3, 4.
//Intersection of the sets A and B, denoted A ∩ B,[7] is the set of all objects that are members of both A and B. For example, the intersection of 1, 2, 3 and 2, 3, 4 is the set 2, 3.
//Set difference of U and A, denoted U \ A, is the set of all members of U that are not members of A. The set difference 1, 2, 3 \ 2, 3, 4 is 1, while conversely, the set difference 2, 3, 4 \ 1, 2, 3 is 4. When A is a subset of U, the set difference U \ A is also called the complement of A in U. In this case, if the choice of U is clear from the context, the notation Ac is sometimes used instead of U \ A, particularly if U is a universal set as in the study of Venn diagrams.
//Symmetric difference of sets A and B, denoted A △ B or A ⊖ B,[7] is the set of all objects that are a member of exactly one of A and B (elements which are in one of the sets, but not in both). For instance, for the sets 1, 2, 3 and 2, 3, 4, the symmetric difference set is 1, 4. It is the set difference of the union and the intersection, (A ∪ B) \ (A ∩ B) or (A \ B) ∪ (B \ A).
//Cartesian product of A and B, denoted A × B,[7] is the set whose members are all possible ordered pairs (a, b), where a is a member of A and b is a member of B. For example, the Cartesian product of 1, 2 and red, white is (1, red), (1, white), (2, red), (2, white).
//Power set of a set A, denoted  is the set whose members are all of the possible subsets of A. For example, the power set of 1, 2 is  , 1, 2, 1, 2 .
//Some basic sets of central importance are the set of natural numbers, the set of real numbers and the empty set—the unique set containing no elements. The empty set is also occasionally called the null set,[11] though this name is ambiguous and can lead to several interpretations.
//					</div>
//					<div>
//						Elementary set theory can be studied informally and intuitively, and so can be taught in primary schools using Venn diagrams. The intuitive approach tacitly assumes that a set may be formed from the class of all objects satisfying any particular defining condition. This assumption gives rise to paradoxes, the simplest and best known of which are Russell's paradox and the Burali-Forti paradox. Axiomatic set theory was originally devised to rid set theory of such paradoxes.[note 1]
//
//The most widely studied systems of axiomatic set theory imply that all sets form a cumulative hierarchy. Such systems come in two flavors, those whose ontology consists of:
//
//Sets alone. This includes the most common axiomatic set theory, Zermelo–Fraenkel set theory with the Axiom of Choice (ZFC). Fragments of ZFC include:
//Zermelo set theory, which replaces the axiom schema of replacement with that of separation;
//General set theory, a small fragment of Zermelo set theory sufficient for the Peano axioms and finite sets;
//Kripke–Platek set theory, which omits the axioms of infinity, powerset, and choice, and weakens the axiom schemata of separation and replacement.
//Sets and proper classes. These include Von Neumann–Bernays–Gödel set theory, which has the same strength as ZFC for theorems about sets alone, and Morse–Kelley set theory and Tarski–Grothendieck set theory, both of which are stronger than ZFC.
//The above systems can be modified to allow urelements, objects that can be members of sets but that are not themselves sets and do not have any members.
//
//The New Foundations systems of NFU (allowing urelements) and NF (lacking them) are not based on a cumulative hierarchy. NF and NFU include a "set of everything", relative to which every set has a complement. In these systems urelements matter, because NF, but not NFU, produces sets for which the axiom of choice does not hold.
//
//Systems of constructive set theory, such as CST, CZF, and IZF, embed their set axioms in intuitionistic instead of classical logic. Yet other systems accept classical logic but feature a nonstandard membership relation. These include rough set theory and fuzzy set theory, in which the value of an atomic formula embodying the membership relation is not simply True or False. The Boolean-valued models of ZFC are a related subject.
//
//An enrichment of ZFC called internal set theory was proposed by Edward Nelson in 1977.
//					</div>
//                </div>
//            </section>
//        </div>
//    );
//}
//
//export default Goal;
//
//
//

