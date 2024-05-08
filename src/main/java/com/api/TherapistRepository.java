package com.api;

import java.util.List;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;

import com.model.Therapist;

public interface TherapistRepository extends Neo4jRepository<Therapist, Long> {

	@Query("MATCH (ss:SpecificSymptom)-[:CATEGORIZED_AS]->(sc:SymptomCategory)<-[:CAN_TREAT]-(t:Therapist) " + 
		       "WHERE ss.name = $specificSymptom AND ANY(service IN t.serviceType WHERE service = 'Online') " + 
		       "RETURN t"+
		       " ORDER BY t.rating DESC")
	List<Therapist> findOnlineTherapists(String specificSymptom);

	@Query("MATCH (ss:SpecificSymptom)-[:CATEGORIZED_AS]->(sc:SymptomCategory)<-[:CAN_TREAT]-(t:Therapist)-[:LOCATED_IN]->(l:Location) " + 
		       "WHERE ss.name = $specificSymptom AND 'InPerson' IN t.serviceType AND l.zipCode = $zipCode " + 
		       "RETURN t"+
		       " ORDER BY t.rating DESC")
	List<Therapist> findInPersonTherapists(String specificSymptom, String zipCode);

}
