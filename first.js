$: s("<[hh hh] cp [- hh cp hh] cp>*4")
  .mask("<1 1 1 0 0>/8")._pianoroll()

$: n("<<-10>*4 <0>*4 <-10>*16 <0>*16>/2").scale("g:minor").trans(-12).s("supersaw")
  .mask("<1 1 1 1 0>/8")._pianoroll()

$: n("<-*4 [1 2 3 4] -*4 [1 2 3 4]*2>").scale("c:minor").s("gm_acoustic_bass")
  .mask("<0 1 1 1 0>/8")._pianoroll()

$: n("<[4 3 2 1]*2 -*4 [4 3 2 1]*2 -*4>").scale("c:minor").s("gm_acoustic_bass")
  .mask("<0 0 1 1 0>/8")._pianoroll()