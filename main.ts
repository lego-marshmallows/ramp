motors.mediumA.setBrake(true)
motors.mediumA.run(10, 30, MoveUnit.Degrees)
motors.largeBC.steer(0, 40, 2400, MoveUnit.Degrees)
motors.stopAll()
motors.largeBC.steer(-125, 30, 362, MoveUnit.Degrees)
motors.largeBC.steer(0, 80, 2400, MoveUnit.Degrees)
brick.exitProgram()
