import subprocess
def run(task, message, sleep_for):
    print(message)
    subprocess.run(task)
    subprocess.run(["sleep",sleep_for])

task=[["apt", "update"],
        ["apt", "upgrade"],
        ["apt", "autoremove"]]

message=["RUNNING UPDATE PACKAGE LIST ...\n",
        "RUNNING UPGRADE ...\n",
        "RUNNIG AUTOREMOVE ...\n"]

for i in range(len(task)):
    print() # extra space above
    run(task[i],message[i],"2")

