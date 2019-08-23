class Sleep {
		constructor(data) {
			this.data = data
			this.dates = []
			this.day = null
			this.week = []
		}
		findAvgSleep() {
			var sum = 0
			this.data.forEach(user => {
				sum += user["hoursSlept"]
			});
			sum = sum / this.data.length
			return sum		
		}
		findSleepDates() {
			this.data.forEach(user => {
				this.dates.push(user["date"])
			})
			return this.dates
		}
		findSleepDay(date) {
			this.data.forEach(user => {
				if(user.date === date) {
					this.day = user.hoursSlept
					return this.day
				}
			});
		}
		findSleepWeek(index) {
			this.week = []
			let weekDays = []
			if (index + 7 < this.data.length) {
				for (let i = index; i < index + 7; i++){
					this.week.push(this.data[i])
				}
			} else {
					for (let i = index; i < this.data.length; i++){
						this.week.push(this.data[i])
				}
			}
			for (let i = 0; i < this.week.length; i++) {
			// weekDays.push(this.week[i].date)
			weekDays.push(this.week[i].hoursSlept) 
			}
			return weekDays
		}
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}