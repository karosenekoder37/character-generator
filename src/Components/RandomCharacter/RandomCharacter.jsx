import React, { useState } from 'react';
import './RandomCharacter.css';

const RandomCharacter = () => {
  
    const [character, setCharacter] = useState(
        {   characterName: "Monkey D. Luffy",
            description: "Luffy is the captain of the Straw Hat Pirates. His dream is to be King of the Pirates by finding the Legendary One Piece. He has unparalled determinaton and hunger with a gung ho spirit to match. He is the main character in One Piece.",
            devilFruit: "the Gomu Gomu no Mi or Gum Gum Fruit, which makes him into a rubber man. This allows him to stretch, bounce, bend, twist, and inflate to unimaginable lengths. He uses his ability for attacks with some of his top techniques being the Gum-Gum Pistol, Gum-Gum Bazooka, & Gum-Gum Jet Gatling.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c846b9a-1cee-46bf-8736-521d8272f9dc/detqlyy-a5f9ea74-faab-46a8-a7b5-e79f7686a78d.png/v1/fit/w_666,h_872/monkey_d__luffy__one_piece__render_2_by_princesspuccadominyo_detqlyy-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcyIiwicGF0aCI6IlwvZlwvOGM4NDZiOWEtMWNlZS00NmJmLTg3MzYtNTIxZDgyNzJmOWRjXC9kZXRxbHl5LWE1ZjllYTc0LWZhYWItNDZhOC1hN2I1LWU3OWY3Njg2YTc4ZC5wbmciLCJ3aWR0aCI6Ijw9NjY2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8jbD53BRXeIn5QsyPI432suu4K4WBRB71pOV9a9rLhQ'
    });

    const generatedCharacter = [
        {
            characterName: "Roronoa Zoro aka 'Pirate Hunter'",
            description: "Zoro was the first crew membber to join Luffy's Straw Hat Pirates. He is a master swordsman with a unique 'Three Sword Style' fighting technique. He is driven by his lifelong dream to become the world's greatest swordsman. He is also notoriosuly terrible at directions.",
            devilFruit: "no devil fruit power. However, he has inhumane strength that delivers great power with eaech strike. He also possesses all 3 types of Haki, the color of arms, the color of observation, & the color of sumpreme king aka conqueror's Haki.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5eeba79-4572-44a6-99ce-2340ad2bced0/dee1qh9-d428a42f-5c43-48d6-a4f0-d3188a80000f.jpg/v1/fill/w_1280,h_768,q_75,strp/roronoa_zoro_by_cjmofo_dee1qh9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYTVlZWJhNzktNDU3Mi00NGE2LTk5Y2UtMjM0MGFkMmJjZWQwXC9kZWUxcWg5LWQ0MjhhNDJmLTVjNDMtNDhkNi1hNGYwLWQzMTg4YTgwMDAwZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zfN6uxUoNF1bnr_CiCQTsEeqwauBRE_DoaqLmCea9HU'
        },
        {
            characterName: "Tony Tony Chopper",
            description: "Chopper is a reindeer who ate the Human-Human Fruit, allwoing him to transform into a human, deer hybrid. He serves as the doctor of the Straw Hat Pirates. He is known for his kind heart and strong desire to help others.",
            devilFruit: "the Hito Hito no Mi, making him a human, reindeer hybrid. So, he can walk on two legs and speak to both humans and animals. He ivented his very own drug known as the 'Rumble Ball' which allows him to access traditional transformations (Jumping Point, Guard Point, Arm Point, & Horn Point).",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dej5nvb-f6db4cb5-6724-4726-809d-c5887310162c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGVqNW52Yi1mNmRiNGNiNS02NzI0LTQ3MjYtODA5ZC1jNTg4NzMxMDE2MmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7eYKAL5WoHDwm-G-_PvAqukWgYLiqcnge-XMoPwPu8k'
        },{
            characterName: "Nami",
            description: "Nami becomes the Straw Hats' navigator after Luffy frees her from being a subordinate to the Arlong pirates. Her dream is to draw a map of the entire world. She has a massive green thumb, not for gardening but for money and loves treasure.",
            devilFruit: "no devil fruit power. However, she uses a three sectioned staffed, known as the Clima-Tact, to manipulate the weather around her to create attacks. Some of her techniques include Mirage Tempo to create a fake illusions of her self and Thunderbolt Tempo to create a powerful lightning cloud.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/997b9a69-5096-43a7-bd01-5725fcabfdb2/d4ieiue-a51f676b-cde8-4526-8c29-17d8cf9588c9.png/v1/fill/w_900,h_833/wanted_by_rukia95_d4ieiue-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMzIiwicGF0aCI6IlwvZlwvOTk3YjlhNjktNTA5Ni00M2E3LWJkMDEtNTcyNWZjYWJmZGIyXC9kNGllaXVlLWE1MWY2NzZiLWNkZTgtNDUyNi04YzI5LTE3ZDhjZjk1ODhjOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KZxLR3rlC9Hvsuufr8euiRjn-BI8pngAfMGkZfay0WU'
        },{
            characterName: "Vinsmoke Sanji aka 'Black Leg Sanji'",
            description: "Sanji is the cook for Straw Hat Pirates. His dream is to find the rumored chef's paradise, the All Blue, which is where the East Blue, West Blue, North Blue, and South Blue meet. He is a huge ladies man with a somewhat perverted nature who flirts with any attractive woman he sees.",
            devilFruit: "no devil fruit. However, due to the arduous training under the chef Zeff he gained extraordinary superhuman strength, speed, and agility. He also became a master at Black Leg Style, a form of martial arts that relies solely on dynamic kick & well-coordinated kicks.",
            imageUrl: 'https://wallpapers.com/images/high/one-piece-sanji-portrait-aiify2hlk3pkiwk3.png'
        },{
            characterName: "Nico Robin",
            description: "Nico is the archeologist of the Straw Hats. As the sole survivor of the destroyed island Ohara, she is one of only two people in the world known to have the ability to read and decipher Poneglyphs which is forbidden by the world government.",
            devilFruit: "the Hana Hana no Mi or Flower-Flower Fruit, which allows her to replicate & sprout her body parts from any surface. She uses her ability to many times sproud multiples on her own body to extend her reach. For tactical approaches she can also spout an eye or ear in spaces to gather intelligence.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50dad8da-ce58-4540-a042-1313d34b7e56/dfiyxaw-721b01c7-1f22-4456-9a36-95adf4f80047.png/v1/fit/w_750,h_1188/onepiece_by_dt501061_dfiyxaw-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwMCIsInBhdGgiOiJcL2ZcLzUwZGFkOGRhLWNlNTgtNDU0MC1hMDQyLTEzMTNkMzRiN2U1NlwvZGZpeXhhdy03MjFiMDFjNy0xZjIyLTQ0NTYtOWEzNi05NWFkZjRmODAwNDcucG5nIiwid2lkdGgiOiI8PTM3ODYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ntMGpUFjW1CQAzJEGZcprF3k2t8xHWrtkXHGIUTlgI0'
        },{
            characterName: "Usopp aka 'Sniper King' aka 'God Usopp'",
            description: "Usopp is the sniper of the Straw Hats. He is known for being a huge coward who often wants to run away at the slightest sign of danger. Despite his usual cowardice, he dreams of becoming a brave warrior of the sea just like his father.",
            devilFruit: "no devil fruit and many times viewed as the weakest member in the crew, lacking in both phsycial and mental strength. However, he is an extremely skilled sniper with the capability of turning slingshots into formidable and terrifying weapons. He never misses his target.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ce1372a-b75c-4058-b0c8-1bf1c2d6837e/de84ybn-f1563a65-6413-495d-bf26-968f1cd3f2ba.png/v1/fit/w_703,h_885/usopp___sogeking_by_hobbj_de84ybn-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvMWNlMTM3MmEtYjc1Yy00MDU4LWIwYzgtMWJmMWMyZDY4MzdlXC9kZTg0eWJuLWYxNTYzYTY1LTY0MTMtNDk1ZC1iZjI2LTk2OGYxY2QzZjJiYS5wbmciLCJ3aWR0aCI6Ijw9NzAzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9oTcygDUbMQcrlQJiIZGObvtuOAn_yC_qpIKMevSSC8'
        },{
            characterName: "Brook aka 'Soul King'",
            description: "Brook is the musician of the Straw Hats and his their second swordsman with Zoro. He was originally a member of the Rumbar Pirates then died and was resurrected through the power of the Yomi Yomi Fruit. He drifted alone for 50 years until meeting Luffy and joining his crew.",
            devilFruit: "the Yomi Yomi no Mi, which allowed his soul to return to his dead body after death. He can separate his soul from his body, effectively becoming a ghost that can go through walls. His soul energy exudes pure coldness so one move, the 'Chill of the Underworld', allows him to freeze his surroundings.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dej5nr9-ceae2a1d-50bf-4f5e-8b78-56a468a08d38.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGVqNW5yOS1jZWFlMmExZC01MGJmLTRmNWUtOGI3OC01NmE0NjhhMDhkMzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mUCyk2Ee0kO0O33ebUlf2QBxCCJQqEwH5KLukTBbwUA'
        },{
            characterName: "Franky",
            description: "Franky is the shipwright of the Straw Hats and is in charge of maintenance, repairs, and upgrades to the Sunny. He is also a cyborg through the result of his own self-modifications to repair his body after being hit by the Puffing Tom.",
            devilFruit: "no devil fruit powers or Haki, but due his bionic modifications he has superhuman strength and resilience to damage. Furthermore, he has an arsenal of weapons at his disposable that are part of his cyborg modifications.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92dc41d9-3e98-4010-a39f-e87a33468720/dgd8kkl-4b47bf81-7e10-4912-803e-b731c49ded75.jpg/v1/fit/w_736,h_1010,q_70,strp/franky_full_body__one_piece__by_chrisaimdead_dgd8kkl-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMCIsInBhdGgiOiJcL2ZcLzkyZGM0MWQ5LTNlOTgtNDAxMC1hMzlmLWU4N2EzMzQ2ODcyMFwvZGdkOGtrbC00YjQ3YmY4MS03ZTEwLTQ5MTItODAzZS1iNzMxYzQ5ZGVkNzUuanBnIiwid2lkdGgiOiI8PTczNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WEhvspwNU_0UIBgHDt7_4Xmb35msYJX4bphWTOOeZeo'
        },{
            characterName: "Monkey D. Luffy",
            description: "Luffy is the captain of the Straw Hat Pirates. His dream is to be King of the Pirates by finding the Legendary One Piece. He has unparalled determinaton and hunger with a gung ho spirit to match. He is the main character in One Piece.",
            devilFruit: "the Gomu Gomu no Mi or Gum Gum Fruit, which makes him into a rubber man. This allows him to stretch, bounce, bend, twist, and inflate to unimaginable lengths. He uses his ability for attacks with some of his top techniques being the Gum-Gum Pistol, Gum-Gum Bazooka, & Gum-Gum Jet Gatling.",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c846b9a-1cee-46bf-8736-521d8272f9dc/detqlyy-a5f9ea74-faab-46a8-a7b5-e79f7686a78d.png/v1/fit/w_666,h_872/monkey_d__luffy__one_piece__render_2_by_princesspuccadominyo_detqlyy-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcyIiwicGF0aCI6IlwvZlwvOGM4NDZiOWEtMWNlZS00NmJmLTg3MzYtNTIxZDgyNzJmOWRjXC9kZXRxbHl5LWE1ZjllYTc0LWZhYWItNDZhOC1hN2I1LWU3OWY3Njg2YTc4ZC5wbmciLCJ3aWR0aCI6Ijw9NjY2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8jbD53BRXeIn5QsyPI432suu4K4WBRB71pOV9a9rLhQ'
        },{
            characterName: "Jinbe",
            description: "Jinbe is the helmsman of the Straw Hats. He is a whale shark fish-man and powerful master of Fish-Man Karate. His dream is to fulfill his former captain Fisher Tiger's dying wish of co-existence between humans and fish-men. He was one of the seven Warlords of the Sea before joining Luffy's crew.",
            devilFruit: "no devil fruit power, but has tremendous strength even amongst fish-men. His abilities greatly increases even more when he is in water. His mastery in Fish-Man Karate creates such powerful strikes that thry don't even even need to physicalluy hit his opponents to cause damage. ",
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ce1372a-b75c-4058-b0c8-1bf1c2d6837e/de671en-a0c871b1-df7c-4be3-bf85-92b1cdfbee11.png/v1/fit/w_747,h_864/jinbe___knight_of_the_sea_by_hobbj_de671en-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODY0IiwicGF0aCI6IlwvZlwvMWNlMTM3MmEtYjc1Yy00MDU4LWIwYzgtMWJmMWMyZDY4MzdlXC9kZTY3MWVuLWEwYzg3MWIxLWRmN2MtNGJlMy1iZjg1LTkyYjFjZGZiZWUxMS5wbmciLCJ3aWR0aCI6Ijw9NzQ3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8QKKNOmCDeQc38X2e28UyZmZdfdr-ax354NyzqU72cg'
        },
    ];

    const generate = () => {
        const randomGeneratedCharacter = 
            generatedCharacter [Math.floor(Math.random() *  generatedCharacter.length)];
            setCharacter(randomGeneratedCharacter)
    }

    return (
        <div className='container'>
            <div className='cardHeader'>
                    <img className='onePieceLogo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/669dbabb-d4c5-4170-bbe6-1fffd7b4bb09/d1dghop-0187fed5-591f-43a8-afae-dfaa510f12b2.png/v1/fill/w_1528,h_523/one_piece_logo_by_zerocustom1989_d1dghop-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ4IiwicGF0aCI6IlwvZlwvNjY5ZGJhYmItZDRjNS00MTcwLWJiZTYtMWZmZmQ3YjRiYjA5XC9kMWRnaG9wLTAxODdmZWQ1LTU5MWYtNDNhOC1hZmFlLWRmYWE1MTBmMTJiMi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QjJ13phLfu_MFKkdXSwOfoCpN0szNMtMbu7lrFN8bSo'></img>
                    <h1 className='title'>Straw Hat Pirates Crew Generator</h1>
            </div>
            <div className='name'>{character.characterName}</div>
            <div >
                <img className='characterImage' src={character.imageUrl}/>
            </div>
            <div className='description'>{character.description}</div>
            <div className='devilFruit'>Possesses {character.devilFruit}</div>
            <div className='buttonArea'><button className='button' type="button" onClick={generate}>Generate</button></div>
        </div>
    )
}

export default RandomCharacter
