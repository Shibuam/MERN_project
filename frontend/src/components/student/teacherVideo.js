function Video({teacherVideo}){
    return(
        <div>
           {teacherVideo && teacherVideo.teacherDetails.map((teacher)=>
                     <iframe width="auto" height="auto" src={teacher.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            
            )
           }
        </div>
    )
}
export default Video