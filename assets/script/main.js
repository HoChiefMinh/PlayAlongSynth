//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n')

document.querySelector('tone-keyboard').addEventListener('noteon', e => {
    synth.triggerAttack(e.detail.name)
  })
  
  document.querySelector('tone-keyboard').addEventListener('noteoff', e => {
    synth.triggerRelease()
  })

  
