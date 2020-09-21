def get_average(marks)
    marks = marks.inject{ |sum, el| sum + el }.to_f / marks.size
    marks.floor
end