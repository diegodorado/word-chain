const letters_diff_count = (a,b) => {
  let count = 0;
  for(let i=0; i< a.length; i++){
    if(a[i] !== b[i])
      count++;
  }
  return count;
}

export const chain = (words,start,goal) => {

  const parents = new Map()
  const visited  = []
  let open  = [start]
  let distance = letters_diff_count(start,goal)

  const get_path = () => {
    const path = [goal]
    let parent = goal
    while(parent !== start){
      parent = parents.get(parent)
      path.push(parent)
    }
    return path.reverse()
  }

  //sanity check
  if(start.length !== goal.length)
    return null


  // we expect the distance to decrease each step
  // but in some cases, we have to insist for a while
  while(distance){

    const candidates = new Map()

    for(let i=open.length-1; i>=0; i--){

      const current = open[i]

      // get all the adjacent words which weren't visited yet
      for(let j=0;j<words.length;j++){
        const w = words[j]
        if ( w.length === goal.length
            && !open.includes(w) 
            && !visited.includes(w) 
            && letters_diff_count( w, current) === 1){

          // are we done?
          if( w === goal){
            parents.set(goal, current)
            return get_path()
          }

          const aproaching =  letters_diff_count(w,goal) < distance
          candidates.set(w, {parent: current, aproaching})

        }

      }

      // add this word to the visited array
      visited.push(current)

    }

    if(candidates.size ===0){
      return null
    }


    // check if at least one candidate is closer to the goal
    const hasAproachingWords = [...candidates.values()]
      .filter(o => o.aproaching)
      .length > 0

    if(hasAproachingWords)
      distance--

    candidates.forEach( (val,key) => {
      if(val.aproaching || !hasAproachingWords){
        open.push(key)
        parents.set(key, val.parent)
      }
    })

    // remove visited from the open list
    open = open.filter(w => !visited.includes(w))

  }

}


