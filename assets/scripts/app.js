/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T09:18:51-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T11:54:15-05:00
 */

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const Userevents = require('./user/events')
const Gameevents = require('./game/events')
const User2events = require('./user2/events')
const Control = require('./control/control')
const gameui = require('./game/ui')
const help = require('./help')

$(() => {
  // your JS code goes here
  //User1
  $('#sign-up').on('submit', Userevents.onSignUp)
  $('#sign-in').on('submit', Userevents.onSignIn)
  $('#sign-out').on('click', Userevents.onSignOut)
  $('#change-password').on('submit', Userevents.onChangePassword)

  //Game
  $('#Getgame').on('click', Gameevents.onGetGame)
  $('#CreateGame').on('click', Gameevents.onCreateGame)
  $('#showgame').on('submit', Gameevents.onShowGame)
  $('#GetUnfinished').on('click', Gameevents.onShowUnoverGame)
  $('.square').on('click', Gameevents.onUpdate)
  //User2
  $('#User2-Signin').on('submit', User2events.onSignIn)
  $('#User2-Signout').on('click', User2events.onSignOut)
  $('#Join').on('click', User2events.onJoin)
  $('#clearshowgame').on('click',gameui.Onshowgamereset)

  //reset title
  $('#SignUpButton').on('click', function () {
    help.ResetTitle()
  })
  $('#SignInButton').on('click', function () {
    help.ResetTitle()
  })

  $('#SignInButton2').on('click', function () {
    help.ResetTitle()
  })
})
