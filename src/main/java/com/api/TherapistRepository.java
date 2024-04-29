package com.api;

import java.util.List;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;

import com.model.Therapist;

public interface TherapistRepository extends Neo4jRepository<Therapist, Long> {

	@Query("MATCH (ss:SpecificSymptom)-[:CATEGORIZED_AS]->(sc:SymptomCategory)<-[:CAN_TREAT]-(t:Therapist) " + 
		       "WHERE ss.name = $specificSymptom " + 
		       "RETURN t")
	List<Therapist> findBySymptomCategory(String specificSymptom);

}
