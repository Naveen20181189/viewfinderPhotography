let time = gsap.timeline();
time.from("#navtitle h1",{
    opacity:0,
    y:-20,
    scale:0.2,
    duration:0.5,
    delay:0.4
})
time.from(".links",{
    opacity:0,
    y:-20,
    scale:0.2,
    duration:0.5,
    stagger:0.2
})
gsap.from(".coverphoto",{
    opacity:0,
    duration:0.3   
})
time.from(".covermatter h2",{
    color:"white",
    scale:0.2,
    opacity:0,
    y:-20,
    duration:1,
    
})
time.from("#covereffect",{
    color:"white",
    duration:2,
    y:200
})
time.from("blockquote",{
    color:"green",
    scale:0.2,
    opacity:0,
    y:20,
    duration:1,
    
})

time.from("#page3 h1",{
    x:-200,
    duration:0.9,
    opacity:0,
    scrollTrigger:{
    trigger:"#page3",
    scrub:1
    }
})
time.from(".aboutphoto img",{
    x:-200,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
    trigger:"#page3",
    scrub:1
    }
})
time.from(".aboutmatter p",{
    x:-200,
    duration:0.3,
    scrollTrigger:{
    trigger:"#page3",
    scrub:1
    }
})
